import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    
await resend.emails.send({
  from: 'you@example.com',
  to: 'reezanbhandari@gmail.com',
  subject: 'hello world',
  react: <WelcomeTemplate name="Reezan" />,
});
  return NextResponse.json({ message: 'Email sent successfully' });
}