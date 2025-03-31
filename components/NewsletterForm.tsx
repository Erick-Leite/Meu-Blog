'use client'
// Código baseado em: pliny/ui/NewsletterForm
import { useActionState } from 'react'
import clsx from 'clsx'

const API_URL = '/api/newsletter'

type FormState = {
  error: boolean
  subscribed: boolean
}

const subscribe = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  const email = formData.get('email')

  const res = await fetch(API_URL, {
    body: JSON.stringify({ email }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'Post',
  })

  const { error } = await res.json()

  return error ? { error: true, subscribed: false } : { error: false, subscribed: true }
}

const NewsletterForm = () => {
  const [formState, formAction, isPending] = useActionState<FormState, FormData>(subscribe, {
    error: false,
    subscribed: false,
  })
  const { error, subscribed } = formState

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Inscreva-se na newsletter
      </div>
      <form className="flex flex-col sm:flex-row" action={formAction}>
        <div>
          <label htmlFor="email-input">
            <span className="sr-only">Endereço de e-mail</span>
            <input
              autoComplete="email"
              className={clsx(
                'w-72 rounded-md px-4 focus:border-transparent focus:ring-2 focus:outline-none',
                'disabled:placeholder:text-gray-800 dark:disabled:placeholder:text-gray-200',
                'focus:ring-sky-800 dark:bg-black dark:focus:ring-sky-200'
              )}
              id="email-input"
              name="email"
              placeholder={subscribed ? 'Você está inscrito! 🎉' : 'Insira seu e-mail'}
              required
              type="email"
              disabled={subscribed}
            />
          </label>
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={clsx(
              'w-full rounded-md px-4 py-2 font-medium text-white sm:py-0 dark:text-gray-950',
              'bg-primary-800 dark:bg-primary-200',
              subscribed ? 'cursor-default' : 'hover:bg-primary-900 dark:hover:bg-primary-100',
              'focus:ring-2 focus:ring-sky-800 focus:outline-none dark:focus:ring-sky-200',
              'focus:ring-offset-2 active:bg-sky-800 dark:ring-offset-black dark:active:bg-sky-200'
            )}
            type="submit"
            disabled={subscribed}
          >
            {isPending && <span>Inscrevendo...</span>}
            {!isPending && subscribed && <span>Obrigado!</span>}
            {!isPending && !subscribed && <span>Inscrever-se</span>}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-800 sm:w-96 dark:text-red-200">
          Seu endereço de e-mail é inválido ou você já está inscrito!
        </div>
      )}
    </div>
  )
}

export default NewsletterForm
