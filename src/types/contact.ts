export interface ContactLead {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message?: string;
  file?: File | null;
}
