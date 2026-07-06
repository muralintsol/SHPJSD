import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ProductCard";
import { ContactForm } from "@/components/ContactForm";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Link } from "@/i18n/navigation";
import { MessageCircle, Phone, Mail, MapPin, Users } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const common = await getTranslations("common");

  const whatsappUrl = getWhatsAppUrl(
    "Hello! I would like to inquire about Sumangali Home Foods products."
  );

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border-2 border-[#25D366] bg-[#25D366]/10 p-6 transition-colors hover:bg-[#25D366]/20"
            >
              <MessageCircle className="h-8 w-8 shrink-0 text-[#25D366]" />
              <div>
                <h3 className="font-semibold text-terracotta">{t("whatsappTitle")}</h3>
                <p className="mt-1 text-sm text-foreground/70">{t("whatsappText")}</p>
                <span className="mt-2 inline-block text-sm font-medium text-[#25D366]">
                  {common("orderWhatsApp")} →
                </span>
              </div>
            </a>

            <Link
              href="/vision"
              className="flex items-start gap-4 rounded-2xl border-2 border-saffron/40 bg-saffron/10 p-6 transition-colors hover:bg-saffron/20"
            >
              <Users className="h-8 w-8 shrink-0 text-saffron" />
              <div>
                <h3 className="font-semibold text-terracotta">{t("joinTitle")}</h3>
                <p className="mt-1 text-sm text-foreground/70">{t("joinText")}</p>
                <span className="mt-2 inline-block text-sm font-medium text-saffron">
                  {t("joinCta")} →
                </span>
              </div>
            </Link>

            <div className="space-y-4 rounded-2xl border border-turmeric/20 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-turmeric" />
                <div>
                  <p className="text-xs font-medium text-foreground/50">{t("phone")}</p>
                  <p className="font-medium text-terracotta">+91 70197 74862</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-turmeric" />
                <div>
                  <p className="text-xs font-medium text-foreground/50">{t("email")}</p>
                  <p className="font-medium text-terracotta">sumangali.homefoods@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-turmeric" />
                <div>
                  <p className="text-xs font-medium text-foreground/50">{t("location")}</p>
                  <p className="font-medium text-terracotta">
                    Darshanapur, Shahpur Taluk
                    <br />
                    Yadgir District, Karnataka 585309
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-semibold text-terracotta">{t("socialTitle")}</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="rounded-full bg-cream-dark px-4 py-2 text-sm font-medium text-terracotta hover:bg-turmeric/20"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="rounded-full bg-cream-dark px-4 py-2 text-sm font-medium text-terracotta hover:bg-turmeric/20"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-turmeric/20 bg-white p-8 shadow-sm">
            <h3 className="mb-6 font-serif text-xl font-bold text-terracotta">
              {t("formTitle")}
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
