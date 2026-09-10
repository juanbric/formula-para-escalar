(() => {
  const HOTMART_URL = "https://pay.hotmart.com/D107561639W?checkoutMode=10";
  const META_PIXEL_ID = "YOUR_META_PIXEL_ID";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Keep Meta/UTM attribution when moving from the landing page to Hotmart.
  const passthroughKeys = [
    "fbclid",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term"
  ];

  function buildCheckoutUrl() {
    if (!HOTMART_URL) {
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

    link.addEventListener("click", () => {
      if (
        window.fbq &&
        META_PIXEL_ID &&
        META_PIXEL_ID !== "YOUR_META_PIXEL_ID"
      ) {
        fbq("trackCustom", "FormulaCheckoutClick", {
          product: "La Fórmula para Escalar",
          value: 499,
          currency: "MXN"
        });
      }
    });
  });
})();
