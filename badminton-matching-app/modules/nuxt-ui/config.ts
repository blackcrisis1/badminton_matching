import type { AppConfigInput } from "nuxt/schema";

export const appConfig: AppConfigInput = {
  toaster: {
    position: "bottom-right" as const,
    expand: true,
    duration: 5000,
  },
  ui: {
    colors: {
      primary: "primary",
      secondary: "secondary",
      error: "primary",
    },
    button: {
      slots: {
        base: "font-semibold justify-center",
      },
      variants: {
        size: {
          sm: {
            base: "text-(length:--text-button-2)/(--text-button-1--line-height) px-2 py-1 gap-1 rounded-lg",
          },
          md: {
            base: "text-(length:--text-button-1)/(--text-button-1--line-height) px-4 py-2 gap-2 rounded-xl",
          },
          lg: {
            base: "text-(length:--text-button-1)/(--text-button-1--line-height) px-6 py-3 gap-2 rounded-xl",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            "text-(--color-light-green-cont-hover) bg-(--color-light-green) hover:bg-(--color-light-green-hover) focus:bg-(--color-light-green-focused) focus:text-(--color-light-green-cont-hover) active:text-(--color-light-green-cont-focused) active:bg-(--color-light-green-pressed) focus-visible:ring-2 focus-visible:ring-(--color-light-green) disabled:bg-(--color-light-green-cont-focused) disabled:text-(--color-light-green-300) aria-disabled:bg-transparent has-[.active]:text-(--color-light-green-const-focused) has-[.active]:bg-(--color-primary-pressed)",
        },
        {
          color: "secondary",
          variant: "solid",
          class:
            "text-(--color-secondary-cont-hover) bg-(--color-secondary) hover:bg-(--color-secondary-hover) focus:bg-(--color-secondary-focused) focus:text-(--color-secondary-cont-hover) active:text-(--color-secondary-cont-focused) active:bg-(--color-secondary-pressed) focus-visible:ring-2 focus-visible:ring-(--color-secondary) disabled:text-(--color-secondary-disable) disabled:bg-(--color-secondary-cont-focused) disabled:text-(--color-secondary-300) aria-disabled:bg-transparent has-[.active]:text-(--color-secondary-const-focused) has-[.active]:bg-(--color-secondary-pressed)",
        },
        {
          color: "primary",
          variant: "outline",
          class:
            "ring ring-inset ring-(--color-primary) text-(--color-primary) hover:bg-(--color-primary-cont-hover) hover:ring-(--color-primary-hover) hover:text-(--color-primary-hover) focus:ring-(--color-primary-focused) focus:text-(--color-primary-focused) active:text-(--color-primary-pressed) active:bg-(--color-primary-cont-pressed) active:ring-(--color-primary-pressed) focus-visible:ring-2 focus-visible:ring-(--color-primary) disabled:ring-(--color-error-cont-pressed) disabled:text-(--color-error-cont-pressed) disabled:bg-white disabled:hover:ring-(--color-error-cont-pressed) aria-disabled:bg-transparent has-[.active]:text-(--color-primary-pressed) has-[.active]:bg-(--color-primary-cont-focused) has-[.active]:ring-(--color-primary-pressed) [.button-group]:text-(--color-midnight-hover) [.button-group]:ring-(--color-midnight-disable) [.button-group]:hover:text-(--color-primary-hover) [.button-group]:hover:ring-(--color-primary-hover) [.button-group]:hover:bg-(--color-primary-cont-hover) [.button-group]:active:text-(--color-primary-pressed) [.button-group]:active:bg-(--color-primary-cont-pressed) [.button-group]:active:ring-(--color-primary-pressed)",
        },
        {
          color: "secondary",
          variant: "outline",
          class:
            "ring ring-inset ring-(--color-midnight-disable) bg-white text-(--color-midnight) hover:bg-(--color-secondary-cont-hover) hover:ring-(--color-secondary-hover) hover:text-(--color-secondary-hover) focus:ring-(--color-secondary-focused) focus-visible:ring-(--color-secondary-focused) focus:text-(--color-secondary-focused) active:text-(--color-secondary-pressed) active:bg-(--color-secondary-cont-focused) active:ring-(--color-secondary-pressed) focus-visible:ring-2 disabled:ring-(--color-midnight-disable) disabled:text-(--color-midnight-disable) disabled:bg-white disabled:hover:ring-(--color-midnight-disable) aria-disabled:bg-transparent has-[.active]:text-(--color-secondary-pressed) has-[.active]:bg-(--color-secondary-cont-focused) has-[.active]:ring-(--color-secondary-pressed)",
        },
        {
          color: "primary",
          variant: "ghost",
          class:
            "ring-0 text-(--color-primary) hover:bg-transparent hover:text-(--color-primary-hover) focus:text-(--color-primary-focused) active:text-(--color-primary-pressed) disabled:text-(--color-error-cont-pressed) disabled:bg-white aria-disabled:bg-transparent has-[.active]:text-(--color-pressed-pressed)",
        },
        {
          color: "secondary",
          variant: "ghost",
          class:
            "ring-0 text-(--color-midnight) hover:bg-transparent hover:text-(--color-secondary-hover) focus:text-(--color-secondary-focused) active:text-(--color-secondary-pressed) disabled:text-(--color-midnight-disable) disabled:bg-white aria-disabled:bg-transparent has-[.active]:text-(--color-secondary-pressed)",
        },
        {
          color: "primary",
          variant: "link",
          class:
            " ring-0 text-(--color-primary) hover:bg-transparent hover:text-(--color-primary-hover) focus:text-(--color-primary-focused) active:text-(--color-primary-pressed) disabled:text-(--color-error-cont-pressed) disabled:bg-white aria-disabled:bg-transparent has-[.active]:text-(--color-primary-pressed)",
        },
        {
          color: "secondary",
          variant: "link",
          class:
            " ring-0 text-(--color-midnight) hover:bg-transparent hover:text-(--color-secondary-hover) focus:text-(--color-secondary-focused) active:text-(--color-secondary-pressed) disabled:text-(--color-midnight-disable) disabled:bg-white aria-disabled:bg-transparent has-[.active]:text-(--color-secondary-pressed)",
        },
      ],
    },
    badge: {
      variants: {
        size: {
          xs: {
            base: "text-(length:--text-body-4)/(--text-body-4--line-height) px-1.5 py-0.5 gap-1 rounded-sm",
            leadingIcon: "size-3",
            leadingAvatarSize: "3xs",
            trailingIcon: "size-3",
          },
          sm: {
            base: "text-(length:--text-body-4)/(--text-body-4--line-height) px-1.5 py-0.5 gap-1 rounded-sm",
            leadingIcon: "size-3",
            leadingAvatarSize: "3xs",
            trailingIcon: "size-3",
          },
          md: {
            base: "text-(length:--text-body-2)/(--text-body-3--line-height) px-1.5 py-0.5 gap-1 rounded-sm",
            leadingIcon: "size-4",
            leadingAvatarSize: "3xs",
            trailingIcon: "size-4",
          },
          lg: {
            base: "text-(length:--text-body-2)/(--text-body-3--line-height) px-1.5 py-1 gap-0.5 rounded-sm",
            leadingIcon: "size-5",
            leadingAvatarSize: "2xs",
            trailingIcon: "size-5",
          },
          xl: {
            base: "text-(length:--text-body-1)/(--text-body-1--line-height) px-1.5 py-1 gap-0.5 rounded-sm",
            leadingIcon: "size-6",
            leadingAvatarSize: "2xs",
            trailingIcon: "size-6",
          },
        },
      },
    },
    input: {
      slots: {
        base: "w-full",
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "outline",
          class:
            "ring-(--color-midnight-disable) hover:ring-(--color-primary-hover) focus-visible:ring-1 focus-visible:ring-(--color-primary-500) disabled:bg-(--color-midnight-cont-disable) disabled:ring-(--color-midnight-disable)",
        },
        {
          color: "secondary",
          variant: "outline",
          class:
            "ring-(--color-midnight-disable) hover:ring-(--color-secondary-hover) focus-visible:ring-1 focus-visible:ring-(--color-secondary-500) disabled:bg-(--color-midnight-cont-disable) disabled:ring-(--color-midnight-disable)",
        },
        {
          size: "sm",
          class: "h-8 rounded-lg  text-(length:--text-input-2)",
        },
        {
          size: "md",
          class: "h-10 rounded-xl text-(length:--text-input-1)",
        },
        {
          size: "lg",
          class: "h-12 rounded-xl text-(length:--text-input-1)",
        },
        {
          leading: true,
          class: {
            leadingIcon: "sip text-(--color-midnight-500)",
          },
        },
        {
          trailing: true,
          class: {
            trailingIcon: "sip text-(--color-midnight-500)",
          },
        },
      ],
    },
    alert: {
      compoundVariants: [
        {
          color: "success",
          variant: "outline",
          class: {
            root: "ring-0 bg-(--color-success-cont-focused) text-(--color-success-focused)",
          },
        },
        {
          color: "info",
          variant: "outline",
          class: {
            root: "ring-0 bg-(--color-info-cont-focused) text-(--color-info-pressed)",
          },
        },
        {
          color: "warning",
          variant: "outline",
          class: {
            root: "ring-0 bg-(--color-warning-cont-focused) text-(--color-warning-focused)",
          },
        },
        {
          color: "error",
          variant: "outline",
          class: {
            root: "ring-0 bg-(--color-error-cont-focused) text-(--color-error-focused)",
          },
        },
      ],
    },
    textarea: {
      compoundVariants: [
        {
          size: "sm",
          class: "p-3 ps-4 rounded-lg text-(length:--text-input-1)",
        },
        {
          size: "md",
          class: "p-3 ps-4 rounded-xl text-(length:--text-input-1)",
        },
        {
          size: "lg",
          class: "p-3 ps-4 rounded-xl text-(length:--text-input-1)",
        },
        {
          leading: true,
          class: {
            leadingIcon: "text-(--color-midnight-500)",
          },
        },
        {
          trailing: true,
          class: {
            trailingIcon: "text-(--color-midnight-500)",
          },
        },
      ],
    },
    tooltip: {
      slots: {
        content:
          "h-auto flex items-center gap-1 bg-(--color-midnight) text-white shadow-sm rounded-xl ring ring-0 p-3 select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] pointer-events-auto",
        arrow: "fill-(--color-midnight)",
      },
    },
    popover: {
      slots: {
        content:
          "bg-white shadow-lg rounded-xl ring ring-0 data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] focus:outline-none pointer-events-auto",
      },
    },
    avatar: {
      slots: {
        root: "ring-1 ring-(--color-midnight-500) [.round]:!rounded-full [.square]:!rounded-lg",
        fallback: "font-bold group-hover:text-(--color-midnight) capitalize",
      },
      variants: {
        size: {
          sm: {
            root: "size-8 !text-title-4",
          },
          md: {
            root: "size-10 !text-title-3",
          },
          lg: {
            root: "size-12 !text-title-1",
          },
        },
      },
    },
    radioGroup: {
      slots: {
        root: "relative flex items-center",
        base: "cursor-pointer",
        label:
          "cursor-pointer font-normal text-(length:--text-body-3)/(--text-body-3--line-height text-(--color-midnight)",
      },
      variants: {
        disabled: {
          true: {
            base: "cursor-not-allowed opacity-75",
            label: "cursor-not-allowed opacity-75",
            indicator: "disabled",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          class:
            "ring-1 ring-(--color-midnight-disable) bg-white hover:ring-(--color-primary-hover) hover:bg-(--color-primary-cont-hover) focus:bg-(--color-primary-cont-focused) active:bg-(--color-primary-cont-pressed) focus-visible:ring-(--color-primary) disabled:hover:ring-(--color-midnight-disable)",
        },
        {
          color: "secondary",
          class:
            "ring-1 ring-(--color-midnight-disable) bg-white hover:ring-(--color-secondary-hover) hover:bg-(--color-secondary-cont-hover) focus:bg-(--color-secondary-cont-focused) active:bg-(--color-secondary-cont-pressed) focus-visible:ring-(--color-secondary) disabled:hover:ring-(--color-midnight-disable)",
        },
      ],
    },
    toast: {
      slots: {
        root: "ring-0 shadow-[4px_2px_6px_0px_#77869D29]",
        title: "text-(length:--text-body-1)/(--text-body-1--line-height)",
        description: "text-(--color-midnight-500)",
        icon: "flex items-center justify-center size-8 text-(length:--text-header-4) sip",
        progress: "hidden",
        close: "text-(--color-midnight)",
      },
      variants: {
        color: {
          success: {
            root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)",
            icon: "sip after:bg-(--color-success-cont-focused) after:block after:w-8 after:h-8 after:rounded-lg after:absolute after:z-[calc(-1)] text-(--color-success-focused)",
            title: "text-(--color-success-focused)",
            progress: "hidden",
          },
          warning: {
            root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)",
            icon: "sip after:bg-(--color-warning-cont-focused) after:block after:w-8 after:h-8 after:rounded-lg after:absolute after:z-[calc(-1)] text-(--color-warning-focused)",
            title: "text-(--color-warning-focused)",
            progress: "hidden",
          },
          error: {
            root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)",
            icon: "sip after:bg-(--color-primary-cont-pressed) after:block after:w-8 after:h-8 after:rounded-lg after:absolute after:z-[calc(-1)] text-(--color-primary)",
            title: "text-(--color-primary)",
            progress: "hidden",
          },
          info: {
            root: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ui-error)",
            icon: "sip after:bg-(--color-info-cont-focused) after:block after:w-8 after:h-8 after:rounded-lg after:absolute after:z-[calc(-1)] text-(--color-info-focused)",
            title: "text-(--color-info-focused)",
            progress: "hidden",
          },
        },
      },
    },
    modal: {
      variants: {
        transition: {
          true: {
            overlay:
              "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in] bg-(--color-midnight-A30)",
            content:
              "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]",
          },
        },
      },
    },
    buttonGroup: {
      base: "relative inline-flex !-space-x-0",
    },
    table: {
      slots: {
        root: "relative overflow-auto border-collapse border border-(--color-midnight-disable)",
        base: "min-w-full overflow-clip border-spacing-0",
        thead: "!bg-(--color-midnight-cont-pressed) !backdrop-blur-none",
        tbody: "bg-white",
        td: "h-14 !p-0 relative",
        th: "h-14 py-1 px-4 border-0 border-t-0 !border-b-0 border-(--color-midnight-disable) !text-title-3 first:border-0 last:border-0 text-nowrap inset-shadow-[0px_-1px_0px_0px_#ced4da]",
        tr: "h-14 py-1 px-4 border-0 dark:bg-neutral-800",
      },
      variants: {
        pinned: {
          true: {
            th: "sticky !bg-(--color-midnight-cont-pressed) data-[pinned=left]:left-0 data-[pinned=right]:right-0 data-[pinned=right]:inset-shadow-[1px_-1px_0px_0px_#ced4da] [.pinned-left]:inset-shadow-[-1px_-1px_0px_0px_#ced4da] data-[pinned=left]:z-1 data-[pinned=right]:z-1 data-[pinned=left]:inset-shadow-[0px_-1px_0px_0px_#ced4da]",
            td: "sticky bg-white data-[pinned=left]:left-0 data-[pinned=right]:right-0 data-[pinned=right]:inset-shadow-[1px_-1px_0px_0px_#ced4da] [.pinned-left]:inset-shadow-[-1px_-1px_0px_0px_#ced4da] data-[pinned=left]:z-1 data-[pinned=right]:z-1 data-[pinned=left]:inset-shadow-[0px_-1px_0px_0px_#ced4da]",
          },
          false: {
            td: "data-[pinned=false]:inset-shadow-[0px_-1px_0px_0px_#ced4da]",
          },
        },
      },
    },
  },
};
