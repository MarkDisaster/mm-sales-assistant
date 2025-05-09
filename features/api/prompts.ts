export const ANALYZE_PAGE_PROMPT = (dom: string) => `
Analyze the following HTML DOM. Your task is to:

1. **Determine if this is an e-commerce (eshop) page** with product listings. 
   - Look for specific signs of an e-shop, such as product items, prices, and shopping cart buttons.
   - If the page contains these elements and resembles an online store (not just a generic page with products for sale), consider it an e-shop.
   - **If the page contains a tag like \`swiper-slide\`, it's highly likely to be a product item**, so treat it as such.
   - **Do NOT consider non-eshop pages** or pages that don't clearly represent a store with products for sale (e.g., product reviews, informational pages, etc.).
2. Identify the CSS class that marks **each individual product item**, including those inside Swiper components or similar.
3. Each product item must contain:
   - an image,
   - a product title (name),
   - and a price.
4. Only return one single class name that is:
   - **present on all product containers** (including those within Swiper or similar carousels),
   - **most descriptive and specific** to the whole product (not just a subpart like image or title),
   - and **not a generic wrapper or utility class**.

❗Do NOT include code, explanations, or formatting – return a plain text string only.

HTML DOM:

${dom}
`;
