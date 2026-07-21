import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Paperclip, X } from "lucide-react";
import { wa } from "@/lib/contact";

const MAX_FILE = 5 * 1024 * 1024; // 5MB

const schema = z.object({
  name: z.string().trim().min(2, "Nome muito curto").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().min(6, "Telefone inválido").max(30),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  sector: z.string().trim().max(100).optional().or(z.literal("")),
  companySize: z.string().trim().max(80).optional().or(z.literal("")),
  service: z.string().min(1, "Selecione um serviço"),
  urgency: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Desenvolvimento de Sistemas",
  "Automação de Processos (RPA)",
  "Site / Plataforma Web",
  "Agente Inteligente de IA",
  "Consultoria Tech",
  "Outro",
];

const sectors = [
  "Serviços profissionais",
  "Comércio / Retalho",
  "Logística / Operações",
  "Saúde / Bem-estar",
  "Educação / Formação",
  "Outro",
];

const companySizes = ["1-5 pessoas", "6-20 pessoas", "21-75 pessoas", "76+ pessoas"];

const urgencies = [
  "Ainda estou a avaliar",
  "Quero começar nas próximas semanas",
  "Preciso resolver com urgência",
];

const budgets = [
  "Ainda não definido",
  "Até 500 EUR",
  "500-1.500 EUR",
  "1.500-5.000 EUR",
  "Acima de 5.000 EUR",
];

interface Props {
  onSubmitted?: (lead: FormValues & { file?: File | null }) => void;
}

export function ContactForm({ onSubmitted }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > MAX_FILE) {
      setFileError("Ficheiro máximo 5MB");
      return;
    }
    setFile(f);
  };

  const onSubmit = async (values: FormValues) => {
    // Hook para integração futura (CRM, Supabase, email)
    onSubmitted?.({ ...values, file });

    const text = `Olá! Sou ${values.name}.
Empresa: ${values.company || "—"}
Sector: ${values.sector || "—"}
Dimensão: ${values.companySize || "—"}
E-mail: ${values.email}
Telefone: ${values.phone}
Serviço: ${values.service}
Urgência: ${values.urgency || "—"}
Orçamento previsto: ${values.budget || "—"}
Mensagem: ${values.message || "—"}${file ? `\nAnexo: ${file.name}` : ""}`;
    window.open(wa(text), "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
    setFile(null);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl border border-border bg-gradient-card p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome completo *" error={errors.name?.message} {...register("name")} />
        <Field label="E-mail *" type="email" error={errors.email?.message} {...register("email")} />
        <Field label="WhatsApp / Telefone *" error={errors.phone?.message} {...register("phone")} />
        <Field label="Empresa" error={errors.company?.message} {...register("company")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Sector"
          options={sectors}
          placeholder="Selecione o sector"
          error={errors.sector?.message}
          {...register("sector")}
        />
        <SelectField
          label="Dimensão da empresa"
          options={companySizes}
          placeholder="Selecione a dimensão"
          error={errors.companySize?.message}
          {...register("companySize")}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Serviço de interesse *
        </label>
        <select
          {...register("service")}
          defaultValue=""
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
        >
          <option value="" disabled>
            Selecione um serviço
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Urgência"
          options={urgencies}
          placeholder="Selecione a urgência"
          error={errors.urgency?.message}
          {...register("urgency")}
        />
        <SelectField
          label="Orçamento previsto"
          options={budgets}
          placeholder="Selecione uma faixa"
          error={errors.budget?.message}
          {...register("budget")}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Descreva brevemente o desafio
        </label>
        <textarea
          {...register("message")}
          rows={4}
          maxLength={1000}
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
        />
      </div>

      {/* Upload */}
      <div>
        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground transition-smooth hover:border-primary hover:text-foreground">
          <Paperclip className="h-4 w-4" />
          <span>{file ? file.name : "Anexar briefing / documento (opcional, máx 5MB)"}</span>
          <input
            type="file"
            className="hidden"
            onChange={onFile}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          />
          {file && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setFile(null);
              }}
              className="ml-auto rounded-md p-1 hover:bg-secondary"
              aria-label="Remover ficheiro"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </label>
        {fileError && <p className="mt-1 text-xs text-destructive">{fileError}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow-primary transition-bounce hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "👉"} Enviar pedido
      </button>

      {sent && (
        <p className="flex items-center gap-2 text-sm text-primary">
          <CheckCircle2 className="h-4 w-4" /> Recebemos! Abrimos o WhatsApp para concluir.
        </p>
      )}
    </motion.form>
  );
}

const Field = ({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
    <input
      {...props}
      maxLength={255}
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
    />
    {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
  </div>
);

const SelectField = ({
  label,
  error,
  options,
  placeholder,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: string[];
  placeholder: string;
}) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
    <select
      {...props}
      defaultValue=""
      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
  </div>
);
