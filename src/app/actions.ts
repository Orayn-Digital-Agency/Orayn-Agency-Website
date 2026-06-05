'use server'

import { z } from 'zod'
import { createServiceClient } from '@/lib/supabase-server'

const contactSchema = z.object({
  full_name:     z.string().min(2, 'Name must be at least 2 characters.').max(100),
  business_name: z.string().min(1, 'Business name is required.').max(200),
  phone:         z.string().min(7, 'Phone number is required.').max(20),
  email:         z.string().email('Please enter a valid email address.'),
  message:       z.string().min(10, 'Message must be at least 10 characters.').max(2000),
})

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    full_name:     formData.get('full_name'),
    business_name: formData.get('business_name'),
    phone:         formData.get('phone'),
    email:         formData.get('email'),
    message:       formData.get('message'),
  }

  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Please correct the errors below.',
      errors:  parsed.error.flatten().fieldErrors,
    }
  }

  try {
    const supabase = createServiceClient()

    const { error } = await supabase
      .from('contact_inquiries')
      .insert({
        full_name:     parsed.data.full_name,
        business_name: parsed.data.business_name,
        phone:         parsed.data.phone,
        email:         parsed.data.email,
        message:       parsed.data.message,
      })

    if (error) {
      console.error('Supabase insert error:', error)
      return {
        success: false,
        message:
          'Something went wrong on our end. Please try again or reach us directly on WhatsApp.',
      }
    }

    return {
      success: true,
      message:
        'Thank you. We have received your message and will be in touch within 24 hours.',
    }
  } catch (err) {
    console.error('Contact form error:', err)
    return {
      success: false,
      message: 'A server error occurred. Please try again.',
    }
  }
}
