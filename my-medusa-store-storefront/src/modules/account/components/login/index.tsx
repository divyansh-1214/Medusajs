import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="max-w-md w-[100rem] flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <div>
            <h3 className="text-sm p-1">Email</h3>
            <Input
              // className="w-full pb-3 border border-black rounded-md"
              label="Email"
              name="email"
              type="email"
              title="Enter a valid email address."
              autoComplete="email"
              required
              data-testid="email-input"
            />
          </div>
          <div className="">
          <h3 className="text-sm p-1">Password</h3>
          <Input
            // className="w-full pb-3 border border-black rounded-md justify-center"
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
          </div>
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" variant="transparent" className="w-full mt-6 bg-yellow-300">
          Login
        </SubmitButton>
        {/* <SubmitButton data-testid="goole" variant="transparent" className="w-full mt-6 border border-black">
          Contine with Google
        </SubmitButton>
        <SubmitButton data-testid="sign-in-button" variant="transparent" className="w-full mt-6 border border-black">
        Contine with Apple
        </SubmitButton>
        <SubmitButton data-testid="sign-in-button" variant="transparent" className="w-full mt-6 border border-black">
        Contine with Facebook
        </SubmitButton> */}
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
