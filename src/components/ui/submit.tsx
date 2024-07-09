"use client"
import { useFormStatus } from 'react-dom'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './tooltip'

export function SubmitButton({ className = "", text = "Enviar", loadingText = "Enviando", icon = null, loadingIcon = null, valid = true }: { className?: string, text?: string, loadingText?: string, icon?: ReactNode | null, loadingIcon?: ReactNode | null, valid?: boolean }) {
  const { pending } = useFormStatus()
  const isInValid = !valid;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className='flex'>
          <Button type="submit" className={cn(className, "submit-btn gap-2")} disabled={pending || isInValid}>
            {(icon && loadingIcon) ? <>
              {pending ? <>{loadingIcon} <span>{loadingText}</span></> : <>{icon} <span>{text}</span></>}
            </> : <>
              {pending ? <span>{loadingText}</span> : <span>{text}</span>}
            </>}
          </Button>
          </div>
        </TooltipTrigger>
        {isInValid && <TooltipContent side="bottom">
          <p className='text-destructive'>Fill out the form correctly!</p>
        </TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  )
}