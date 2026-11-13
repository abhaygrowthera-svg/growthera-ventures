import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SEO } from '@/components/shared/SEO'
import { PageHero } from '@/components/shared/PageHero'
import { Section } from '@/components/shared/Section'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { ICON_STROKE } from '@/lib/icons'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[+\d\s()-]{10,18}$/, 'Please enter a valid phone number'),
  companyName: z.string().min(1, 'Please enter your company or organisation'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please share a brief message (at least 10 characters)'),
})

type ContactFormValues = z.infer<typeof contactSchema>

async function submitContact(values: ContactFormValues) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
  const formspree = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

  if (serviceId && templateId && publicKey) {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        company: values.companyName,
        service: values.service,
        message: values.message,
      },
      publicKey
    )
    return
  }

  if (formspree) {
    const response = await fetch(formspree, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
    })
    if (!response.ok) throw new Error('Formspree submission failed')
    return
  }

  // Dev fallback when no keys are configured — still show success UX
  await new Promise((resolve) => setTimeout(resolve, 700))
  console.info('Contact form submitted (no EmailJS/Formspree keys configured):', values)
}

export default function Contact() {
  const [successOpen, setSuccessOpen] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      service: '',
      message: '',
    },
  })

  const selectedService = watch('service')

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null)
    try {
      await submitContact(values)
      reset()
      setSuccessOpen(true)
    } catch {
      setSubmitError('Something went wrong while sending your message. Please try again or call us.')
    }
  })

  return (
    <>
      <SEO
        title="Contact"
        description={`Contact Growthera Ventures in Sector 63, Noida. Email ${company.email} or call ${company.phone} for a free consultation.`}
        path="/contact"
      />
      <PageHero
        title="Let's Start a Conversation"
        tagline="Share your requirements — we will respond with clear next steps"
        description="Tell us about your organisation, stage and the support you are looking for."
      />

      <Section tone="page">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-white p-6 shadow-card md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" autoComplete="name" {...register('name')} />
                  {errors.name && (
                    <p className="text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" autoComplete="email" {...register('email')} />
                  {errors.email && (
                    <p className="text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" autoComplete="tel" {...register('phone')} />
                  {errors.phone && (
                    <p className="text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company</Label>
                  <Input id="companyName" autoComplete="organization" {...register('companyName')} />
                  {errors.companyName && (
                    <p className="text-xs text-red-600">{errors.companyName.message}</p>
                  )}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Service of interest</Label>
                  <Select
                    value={selectedService}
                    onValueChange={(value) =>
                      setValue('service', value, { shouldValidate: true })
                    }
                  >
                    <SelectTrigger aria-label="Select a service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.slug} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="General enquiry">General enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-xs text-red-600">{errors.service.message}</p>
                  )}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your stage, sector and what you need help with..."
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>
              </div>

              {submitError && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  {submitError}
                </p>
              )}

              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <aside className="rounded-3xl bg-navy p-6 text-white shadow-card md:p-8">
              <h2 className="font-heading text-lg font-bold uppercase tracking-wide">
                Contact Details
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-gold" />
              <ul className="mt-6 space-y-5 text-sm text-white/80">
                <li className="flex gap-3">
                  <MapPin strokeWidth={ICON_STROKE} className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <a
                    href={company.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                  >
                    {company.address.full}
                  </a>
                </li>
                <li>
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-3 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                  >
                    <Phone strokeWidth={ICON_STROKE} className="h-5 w-5 text-gold" />
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center gap-3 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-light rounded"
                  >
                    <Mail strokeWidth={ICON_STROKE} className="h-5 w-5 text-gold" />
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock strokeWidth={ICON_STROKE} className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{company.hours}</span>
                </li>
              </ul>
            </aside>

            <div className="mt-6 overflow-hidden rounded-3xl shadow-card">
              <iframe
                title="Growthera Ventures office — H-28 ARV Park, Sector 63, Noida"
                src={company.mapEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={company.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-purple hover:text-purple-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple rounded"
            >
              Open location in Google Maps
            </a>
          </Reveal>
        </div>
      </Section>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-soft text-purple">
              <CheckCircle2 strokeWidth={ICON_STROKE} className="h-6 w-6" />
            </div>
            <DialogTitle>Message received</DialogTitle>
            <DialogDescription>
              Thank you for reaching out to Growthera Ventures. Our team will review your message
              and respond with clear next steps.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setSuccessOpen(false)} className="mt-2">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
