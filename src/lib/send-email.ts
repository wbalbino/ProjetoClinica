import emailjs from '@emailjs/browser';

let isSending = false;

export async function sendAppointmentEmail(params: {
  to_name: string;
  to_email: string;
  service_name: string;
  appointment_date: string;
  appointment_time: string;
  clinic_name: string;
  clinic_address: string;
  clinic_phone: string;
}) {
  if (isSending) return;
  
  try {
    isSending = true;
    
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      params,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  } finally {
    isSending = false;
  }
} 