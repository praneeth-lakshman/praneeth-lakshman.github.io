import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { C as Custombar } from "../../../chunks/Custombar.js";
import { A as Avatar } from "../../../chunks/Avatar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Custombar, "Custombar").$$render($$result, { isActive: "About" }, {}, {})} <div class="grid place-items-center w-screen pt-8 "><div class="flex items-center space-x-4 p-8 border-[5px] rounded-3xl">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: "avatar.png",
      border: true,
      class: "ring-red-400 dark:ring-red-300",
      size: "lg"
    },
    {},
    {}
  )} <div class="space-y-1 font-medium text-2xl dark:text-white" data-svelte-h="svelte-whe2b5"><div>Praneeth L</div> <div class="text-l text-amber-500 dark:text-amber-400">Creator of <i>Conversations at Twilight</i></div></div></div></div>`;
});
export {
  Page as default
};
