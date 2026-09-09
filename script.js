(() => {
  const HOTMART_URL = "YOUR_HOTMART_CHECKOUT_URL";
  const META_PIXEL_ID = "YOUR_META_PIXEL_ID";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Keep Meta/UTM attribution when moving from the landing page to Hotmart.
  // The code copies common campaign parameters into the checkout URL.
  const passthroughKeys = [
    "fbclid",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term"
  ];

  function buildCheckoutUrl() {
    if (!HOTMART_URL || HOTMART_URL === "YOUR_HOTMART_CHECKOUT_URL") {
      return "#";
    }

    try {
      const checkout = new URL(HOTMART_URL);
      const current = new URL(window.location.href);

      passthroughKeys.forEach((key) => {
        const value = current.searchParams.get(key);
        if (value) checkout.searchParams.set(key, value);
      });

      return checkout.toString();
    } catch {
      return HOTMART_URL;
    }
  }

  const checkoutUrl = buildCheckoutUrl();

  document.querySelectorAll("[data-checkout]").forEach((link) => {
    link.href = checkoutUrl;

    link.addEventListener("click", (event) => {
      if (!HOTMART_URL || HOTMART_URL === "YOUR_HOTMART_CHECKOUT_URL") {
        event.preventDefault();
        alert("Falta colocar tu URL de checkout de Hotmart en index.html y script.js.");
        return;
      }

      // We intentionally track a custom CTA click instead of InitiateCheckout.
      // Hotmart can track checkout events on its own side; this avoids accidental duplication.
      if (
        window.fbq &&
        META_PIXEL_ID &&
        META_PIXEL_ID !== "YOUR_META_PIXEL_ID"
      ) {
        fbq("trackCustom", "FormulaCheckoutClick", {
          product: "La Fórmula para Escalar",
          value: 27,
          currency: "USD"
        });
      }
    });
  });
})();
