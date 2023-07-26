import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Custombar } from "../../../chunks/Custombar.js";
import { H as Heading, S as Span } from "../../../chunks/Span.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Custombar, "Custombar").$$render($$result, { isActive: "Politics" }, {}, {})} <div class="text-center animate-in slide-in-from-bottom duration-1000">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      align: "center",
      class: "text-m md:text-5xl text-slate-200 pt-2 font-bold",
      color: "white"
    },
    {},
    {
      default: () => {
        return `Welcome to a ${validate_component(Span, "Span").$$render(
          $$result,
          {
            underline: true,
            decorationClass: "decoration-3 decoration-teal-200 decoration-double",
            class: "dark:text-rose-400"
          },
          {},
          {
            default: () => {
              return `Journey.`;
            }
          }
        )}`;
      }
    }
  )}</div>`;
});
export {
  Page as default
};
