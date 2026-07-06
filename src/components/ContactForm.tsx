"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { products } from "@/data/products";
import { getProductName } from "@/data/products";
import { useLocale } from "next-intl";
import { Send } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const common = useTranslations("common");
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const product = data.get("product") as string;
    const inquiry = data.get("inquiry") as string;
    const message = data.get("message") as string;

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nContacting as: ${inquiry}\nProduct: ${product}\n\n${message}`
    );
    window.location.href = `mailto:sumangali.homefoods@gmail.com?subject=Inquiry from ${name}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-leaf/10 p-8 text-center text-leaf">
        <p className="font-semibold">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-terracotta">
          {common("yourName")}
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-turmeric/30 bg-cream px-4 py-2.5 text-sm focus:border-turmeric focus:outline-none focus:ring-2 focus:ring-turmeric/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-terracotta">
          {common("yourEmail")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-turmeric/30 bg-cream px-4 py-2.5 text-sm focus:border-turmeric focus:outline-none focus:ring-2 focus:ring-turmeric/20"
        />
      </div>
      <div>
        <label htmlFor="inquiry" className="mb-1 block text-sm font-medium text-terracotta">
          {common("inquiryType")}
        </label>
        <select
          id="inquiry"
          name="inquiry"
          required
          className="w-full rounded-xl border border-turmeric/30 bg-cream px-4 py-2.5 text-sm focus:border-turmeric focus:outline-none focus:ring-2 focus:ring-turmeric/20"
        >
          <option value={common("inquiryCustomer")}>{common("inquiryCustomer")}</option>
          <option value={common("inquiryArtisan")}>{common("inquiryArtisan")}</option>
          <option value={common("inquiryFpo")}>{common("inquiryFpo")}</option>
          <option value={common("inquiryOther")}>{common("inquiryOther")}</option>
        </select>
      </div>
      <div>
        <label htmlFor="product" className="mb-1 block text-sm font-medium text-terracotta">
          {common("productInterest")}
        </label>
        <select
          id="product"
          name="product"
          className="w-full rounded-xl border border-turmeric/30 bg-cream px-4 py-2.5 text-sm focus:border-turmeric focus:outline-none focus:ring-2 focus:ring-turmeric/20"
        >
          <option value="">{common("selectProduct")}</option>
          {products.map((p) => (
            <option key={p.id} value={getProductName(p, locale)}>
              {getProductName(p, locale)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-terracotta">
          {common("yourMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-turmeric/30 bg-cream px-4 py-2.5 text-sm focus:border-turmeric focus:outline-none focus:ring-2 focus:ring-turmeric/20"
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-turmeric px-6 py-3 font-semibold text-white transition-colors hover:bg-terracotta"
      >
        <Send className="h-4 w-4" />
        {common("sendMessage")}
      </button>
    </form>
  );
}
