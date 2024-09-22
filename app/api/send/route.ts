import { EmailTemplate } from '@/emails/ContactEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: Request) {

  const body = await request.json();

  try {

    const { name, email, company, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Web Notification <web@hueckerapi.com>',
      to: ['zach@hueckerconsulting.com', 'web@hueckerapi.com'],
      subject: 'New Contact Request',
      react: EmailTemplate({ name, email, company, phone, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
