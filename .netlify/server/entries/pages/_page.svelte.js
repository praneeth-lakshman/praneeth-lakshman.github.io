import { c as create_ssr_component, d as compute_rest_props, g as getContext, f as spread, h as escape_attribute_value, i as escape_object, j as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { i as is_void, C as Custombar } from "../../chunks/Custombar.js";
import { P, F as Footer_1 } from "../../chunks/Footer.js";
import { H as Heading, S as Span } from "../../chunks/Span.js";
import { twMerge } from "tailwind-merge";
import { A as Avatar } from "../../chunks/Avatar.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["pill", "outline", "size", "href", "type", "color", "shadow"]);
  const group = getContext("group");
  let { pill = false } = $$props;
  let { outline = false } = $$props;
  let { size = group ? "sm" : "md" } = $$props;
  let { href = void 0 } = $$props;
  let { type = "button" } = $$props;
  let { color = group ? outline ? "dark" : "alternative" : "primary" } = $$props;
  let { shadow = false } = $$props;
  const colorClasses = {
    alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white",
    blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",
    green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",
    light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",
    primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",
    purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
    red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",
    yellow: "text-white bg-yellow-400 hover:bg-yellow-500 ",
    none: ""
  };
  const coloredFocusClasses = {
    alternative: "focus:ring-gray-200 dark:focus:ring-gray-700",
    blue: "focus:ring-blue-300 dark:focus:ring-blue-800",
    dark: "focus:ring-gray-300 dark:focus:ring-gray-700",
    green: "focus:ring-green-300 dark:focus:ring-green-800",
    light: "focus:ring-gray-200 dark:focus:ring-gray-700",
    primary: "focus:ring-primary-300 dark:focus:ring-primary-800",
    purple: "focus:ring-purple-300 dark:focus:ring-purple-900",
    red: "focus:ring-red-300 dark:focus:ring-red-900",
    yellow: "focus:ring-yellow-300 dark:focus:ring-yellow-900",
    none: ""
  };
  const coloredShadowClasses = {
    alternative: "shadow-gray-500/50 dark:shadow-gray-800/80",
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    dark: "shadow-gray-500/50 dark:shadow-gray-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    light: "shadow-gray-500/50 dark:shadow-gray-800/80",
    primary: "shadow-primary-500/50 dark:shadow-primary-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    yellow: "shadow-yellow-500/50 dark:shadow-yellow-800/80 ",
    none: ""
  };
  const outlineClasses = {
    alternative: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white focus:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800",
    blue: "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",
    dark: "text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",
    green: "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",
    light: "text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",
    primary: "text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",
    purple: "text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",
    red: "text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",
    yellow: "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",
    none: ""
  };
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-5 py-3 text-base",
    xl: "px-6 py-3.5 text-base"
  };
  const hasBorder = () => outline || color === "alternative" || color === "light";
  let buttonClass;
  if ($$props.pill === void 0 && $$bindings.pill && pill !== void 0)
    $$bindings.pill(pill);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  buttonClass = twMerge(
    "text-center font-medium",
    group ? "focus:ring-2" : "focus:ring-4",
    group && "focus:z-10",
    group || "focus:outline-none",
    "inline-flex items-center justify-center " + sizeClasses[size],
    outline ? outlineClasses[color] : colorClasses[color],
    color === "alternative" && (group ? "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600" : "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),
    outline && color === "dark" && (group ? "dark:text-white dark:border-white" : "dark:text-gray-400 dark:border-gray-700"),
    coloredFocusClasses[color],
    hasBorder() && group && "border-l-0 first:border-l",
    group ? pill && "first:rounded-l-full last:rounded-r-full" || "first:rounded-l-lg last:rounded-r-lg" : pill && "rounded-full" || "rounded-lg",
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    $$props.disabled && "cursor-not-allowed opacity-50",
    $$props.class
  );
  return `${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: escape_attribute_value(buttonClass)
        },
        {
          role: escape_attribute_value(href ? "button" : void 0)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")} `;
});
const GradientButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "shadow"]);
  const group = getContext("group");
  let { color = "blue" } = $$props;
  let { shadow = false } = $$props;
  const gradientClasses = {
    blue: "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 ",
    green: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800",
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800",
    red: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800",
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400"
  };
  const coloredShadowClasses = {
    blue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    green: "shadow-green-500/50 dark:shadow-green-800/80",
    cyan: "shadow-cyan-500/50 dark:shadow-cyan-800/80",
    teal: "shadow-teal-500/50 dark:shadow-teal-800/80 ",
    lime: "shadow-lime-500/50 dark:shadow-lime-800/80",
    red: "shadow-red-500/50 dark:shadow-red-800/80 ",
    pink: "shadow-pink-500/50 dark:shadow-pink-800/80",
    purple: "shadow-purple-500/50 dark:shadow-purple-800/80",
    purpleToBlue: "shadow-blue-500/50 dark:shadow-blue-800/80",
    cyanToBlue: "shadow-cyan-500/50 dark:shadow-cyan-800/80",
    greenToBlue: "shadow-green-500/50 dark:shadow-green-800/80",
    purpleToPink: "shadow-purple-500/50 dark:shadow-purple-800/80",
    pinkToOrange: "shadow-pink-500/50 dark:shadow-pink-800/80",
    tealToLime: "shadow-lime-500/50 dark:shadow-teal-800/80",
    redToYellow: "shadow-red-500/50 dark:shadow-red-800/80"
  };
  let gradientOutlineClass;
  let divClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  gradientOutlineClass = twMerge(
    "inline-flex items-center justify-center w-full  !border-0",
    $$props.pill || "!rounded-md",
    "bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white",
    // this is limitation - no transparency
    "hover:bg-transparent hover:!text-inherit",
    "transition-all duration-75 ease-in group-hover:!bg-opacity-0 group-hover:!text-inherit"
  );
  divClass = twMerge(
    $$props.outline && "p-0.5",
    gradientClasses[color],
    shadow && "shadow-lg",
    shadow && coloredShadowClasses[color],
    group ? $$props.pill && "first:rounded-l-full last:rounded-r-full" || "first:rounded-l-lg last:rounded-r-lg" : $$props.pill && "rounded-full" || "rounded-lg",
    $$props.class
  );
  return `${$$props.outline ? `<div${add_attribute("class", divClass, 0)}> ${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { color: "none" }, { class: gradientOutlineClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div>` : `${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { color: "none" }, { class: divClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`} `;
});
const PageHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="text-center animate-in slide-in-from-bottom duration-1000">${`${validate_component(Heading, "Heading").$$render(
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
  )}`}</div>`;
});
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="basis-full md:basis-3/12 rounded-3xl border-4 border-pink-200 p-5 bg-gradient-to-b from-purple-900/100 to-blue-900/100 md:bg-gradient-to-r">${validate_component(Span, "Span").$$render(
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
            class: "dark:text-cyan-500 text-xl md:text-2xl pb-5",
            weight: "black",
            align: "center"
          },
          {},
          {
            default: () => {
              return `About me`;
            }
          }
        )}`;
      }
    }
  )} <div class="flex items-center space-x-4">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      src: "avatar.png",
      border: true,
      class: "ring-red-400 dark:ring-red-300",
      size: "lg"
    },
    {},
    {}
  )} <div class="space-y-1 font-medium text-xl dark:text-white" data-svelte-h="svelte-1v3nhab"><div>Praneeth L</div> <div class="text-sm text-amber-500 dark:text-amber-400">Creator of <i>Conversations at Twilight</i></div></div></div> <br><br> ${validate_component(P, "P").$$render($$result, { class: "text-l md:text-xl align-middle" }, {}, {
    default: () => {
      return `I am a diligent, focused and persevering student who has just finished his GCSEs. Having a
			vast array of varied experiences and, as such, distinctive skills allows me to keep pursing my
			distinct interests whilst always looking for the patterns between them.`;
    }
  })} <br> ${validate_component(P, "P").$$render($$result, { class: "text-l md:text-xl align-middle" }, {}, {
    default: () => {
      return `I&#39;ve always wanted a platform where I can share my ideas with like-minded people, and to hold conversations with them about things that are currently on my mind. This blog allows me to document all of these conversations I have, with either myself or the people around me.`;
    }
  })} <br></div>`;
});
const WhatWebsite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("loaded");
  return `<div class="basis-full md:basis-6/12 rounded-3xl border-4 p-5 bg-blue-900/100 border-pink-200">${validate_component(Span, "Span").$$render(
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
              return `What this website is`;
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
        return `<i data-svelte-h="svelte-qzuwh">Dear reader,</i> <br><br>
			Our world is a vibrant interaction between the elements of the nature and the stories of the lives
			who were nurtured by it. One of us cannot unravel this tapestry by ourselves; we require the collaboration
			of those around us. I intend for my journey, brief though as it is, to be a small paving in the
			way of others. I don&#39;t know what I&#39;ll learn, what I&#39;ll discover, what I&#39;ll understand - but I can
			find joy in the fact that my steps are not done alone.`;
      }
    }
  )} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "px-3 pb-5 md:text-xl text-sm",
      align: "right"
    },
    {},
    {
      default: () => {
        return `In our world, there is no shortage of novelties and familiarities. We are surrounded by things
			we do not know, things we think we know, and things that we do not know if we know. Many ask:
			Why bother exploring? However, if we do not explore, if we do not ask those questions that nag
			us, if we do not attempt to find patterns and solutions, what are we? There is no solace in
			the answer; only calmness in knowing that we tried.`;
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
  )} </div>`;
});
const Inspiration = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("loaded");
  return `<div class="basis-full md:basis-3/12 text-fuchsia-400 rounded-3xl border-4 p-5 bg-gradient-to-t from-purple-900/100 to-blue-900/100 md:bg-gradient-to-l border-pink-200">${validate_component(Span, "Span").$$render(
    $$result,
    {
      underline: true,
      decorationClass: "decoration-sky-500 decoration-wavy decoration-green-300 "
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render(
          $$result,
          {
            class: "dark:text-fuchsia-300 text-xl md:text-2xl pb-5",
            weight: "black",
            align: "center"
          },
          {},
          {
            default: () => {
              return `Some inspiration`;
            }
          }
        )}`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, { italic: true, class: "text-l md:text-xl" }, {}, {
    default: () => {
      return `Wisdom begins in wonder`;
    }
  })} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "text-l md:text-xl",
      align: "right"
    },
    {},
    {
      default: () => {
        return `- Socrates`;
      }
    }
  )} <br> ${validate_component(P, "P").$$render($$result, { italic: true, class: "text-l md:text-xl" }, {}, {
    default: () => {
      return `Whoever fights monsters should see to it that in the process he does not become a monster.
			And if you gaze long enough into an abyss, the abyss will gaze back into you.`;
    }
  })} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "text-l md:text-xl",
      align: "right"
    },
    {},
    {
      default: () => {
        return `- Nietzsche`;
      }
    }
  )} <br> ${validate_component(P, "P").$$render($$result, { italic: true, class: "text-l md:text-xl" }, {}, {
    default: () => {
      return `I know of no better life purpose than to perish in attempting the great and the impossible.`;
    }
  })} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "text-l md:text-xl",
      align: "right"
    },
    {},
    {
      default: () => {
        return `- Nietzsche`;
      }
    }
  )} <br> ${validate_component(P, "P").$$render($$result, { italic: true, class: "text-l md:text-xl" }, {}, {
    default: () => {
      return `The sweetest and most inoffensive path of life leads through the avenues of science and
			learning; and whoever can either remove any obstructions in this way, or open up any new
			prospect, ought so far to be esteemed a benefactor to mankind.`;
    }
  })} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "text-l md:text-xl",
      align: "right"
    },
    {},
    {
      default: () => {
        return `- Hume`;
      }
    }
  )} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("loaded");
  return `${validate_component(Custombar, "Custombar").$$render($$result, { isActive: "Home" }, {}, {})} ${validate_component(PageHeading, "PageHeading").$$render($$result, {}, {}, {})} <div class="pt-10"></div> <div class="items-center flex justify-center basis-full">${validate_component(GradientButton, "GradientButton").$$render($$result, { color: "redToYellow", size: "xl" }, {}, {
    default: () => {
      return `<b data-svelte-h="svelte-9vp14o">Read the Latest Article</b>`;
    }
  })}</div> <div class="pt-10"></div> <div class="flex flex-wrap md:flex-nowrap px-5 dark:text-white space-y-4 md:space-y-0 lg:space-x-2 xl:space-x-4">${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})} ${validate_component(WhatWebsite, "WhatWebsite").$$render($$result, {}, {}, {})} ${validate_component(Inspiration, "Inspiration").$$render($$result, {}, {}, {})}</div> ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
