import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Custombar } from "../../../chunks/Custombar.js";
import { S as Span, H as Heading } from "../../../chunks/Span.js";
import { P, F as Footer_1 } from "../../../chunks/Footer.js";
const DeepDive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="basis-full md:basis-1/3 rounded-3xl border-4 border-red-200 p-5 bg-gradient-to-b from-purple-900/100 to-blue-600/100 md:bg-gradient-to-tr hover:bg-gradient-to-bl hover:border-purple-200">${validate_component(Span, "Span").$$render(
    $$result,
    {
      underline: true,
      decorationClass: "decoration-sky-500 decoration-wavy decoration-green-300"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render(
          $$result,
          {
            class: "dark:text-purple-300 text-xl md:text-2xl pb-5",
            weight: "black",
            align: "center"
          },
          {},
          {
            default: () => {
              return `Deep Dive`;
            }
          }
        )}`;
      }
    }
  )} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "px-3 pb-5 md:text-xl text-sm",
      align: "left"
    },
    {},
    {
      default: () => {
        return `This website aims to document my steps into becoming a more informed individual. You will see
			two different voices in all my blogs, as I try to accurately depict the process in my mind
			whilst learning. I aim for this website to shine light on ideas that have not previously been
			given a second thought; to explore the meaning behind things we take for granted; and to make
			sure that, by the end of each article, you can come away feeling like you have learnt
			something. Thank you for your time and support.`;
      }
    }
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Custombar, "Custombar").$$render($$result, { isActive: "Science" }, {}, {})} <div class="text-center animate-in slide-in-from-bottom duration-1000">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      align: "center",
      class: "text-m md:text-5xl text-slate-200 pt-2 font-bold",
      color: "white"
    },
    {},
    {
      default: () => {
        return `${validate_component(Span, "Span").$$render(
          $$result,
          {
            underline: true,
            decorationClass: "decoration-3 decoration-blue-500 decoration-double",
            class: "dark:text-green-300"
          },
          {},
          {
            default: () => {
              return `Science`;
            }
          }
        )}`;
      }
    }
  )} <br> ${validate_component(P, "P").$$render($$result, { italic: true, align: "center" }, {}, {
    default: () => {
      return `<b data-svelte-h="svelte-1lqgs2">An analysis of the patterns that arise around us</b>`;
    }
  })}</div> <br> <div class="flex flex-wrap md:flex-nowrap px-5 dark:text-white space-y-4 md:space-y-0 lg:space-x-2 xl:space-x-4">${validate_component(DeepDive, "DeepDive").$$render($$result, {}, {}, {})}</div> ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
