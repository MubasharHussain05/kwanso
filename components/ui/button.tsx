import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				iconPrimary:
					'flex gap-3 bg-primary text-primary-foreground hover:bg-primary/90 text-base outline-none ',
				filled: 'bg-[--main] text-primary-foreground hover:bg-primary/90 text-sm outline-none',
				filledCircle: 'border border-[--main] text-[--main] text-sm outline-none rounded-full ',

				iconSecondary:
					'flex items-center gap-3 bg-secondary text-white hover:bg-secondary/90 text-base outline-none font-bold mb-0',
				default: 'hover:bg-main text-primary-foreground bg-mainLight',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				outlineIcon:
					'border border-[--main] text-[--main] bg-background hover:bg-[--main] hover:text-white gap-3',
				secondary: 'bg-secondary text-white hover:bg-secondary/80 font-bold',
				ghost: 'hover:bg-accent text-[#B6BAC9] hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			size: {
				default: 'px-5 py-3',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
