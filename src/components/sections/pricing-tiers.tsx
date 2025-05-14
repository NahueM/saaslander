"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const plans = {
  month: [
    { name: "Basic", price: 29 },
    { name: "Pro", price: 59 },
    { name: "Enterprise", price: 129 },
  ],
  year: [
    { name: "Basic", price: 290 },
    { name: "Pro", price: 590 },
    { name: "Enterprise", price: 1290 },
  ],
};

export default function PricingTiers() {
  const [annual, setAnnual] = useState(false);
  const period = annual ? "year" : "month";

  const handleCheckout = async (amount: number) => {
    const stripe = await stripePromise;
    const { error } = await stripe!.redirectToCheckout({
      lineItems: [{ price: `price_${period}_${amount}`, quantity: 1 }],
      mode: "payment",
      successUrl: window.location.href,
      cancelUrl: window.location.href,
    });
    if (error) console.error(error);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-extrabold">
          {annual ? "Premium Anual" : "Pago Mensual"}
        </h2>
        <div className="mt-6 flex justify-center">
          <Switch
            checked={annual}
            onChange={setAnnual}
            className="relative inline-flex items-center h-6 rounded-full w-11 bg-muted"
          >
            <span
              className={`inline-block w-5 h-5 transform bg-primary rounded-full transition-transform ${
                annual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </Switch>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans[period].map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-lg border border-border bg-muted p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold">
                {`€${plan.price}`}
                <span className="text-lg font-medium">
                  /{annual ? "año" : "mes"}
                </span>
              </p>
              <button
                onClick={() => handleCheckout(plan.price)}
                className="mt-6 rounded-lg bg-primary px-5 py-3 font-semibold text-background transition hover:bg-primary/90 dark:hover:bg-primary/80"
              >
                Suscribirse
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
