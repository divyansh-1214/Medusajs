import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const  Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div className="w-full justify-items-center"
    data-testid="login-page">
      <h1 className="text-6xl font-semibold">login</h1>
      <div
        className="w-full grid grid-cols-3 px-[10rem] pt-[5rem] py-16"
        
      >
        <div className="w-full col-span-2">
        </div>
        <div>
          <form className="" action={formAction}>
            <div className="">
              <div>
                <h3 className="text-sm p-1">Email</h3>
                <Input
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
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 font-medium">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <SubmitButton  variant="transparent" className="w-full mt-6 border-[1px] border-black rounded-md ">
              Continue with the Google
            </SubmitButton>
            <SubmitButton data-testid="sign-in-button" variant="transparent" className="w-full mt-6 border-[1px] border-black rounded-md ">
            Continue with the Apple
            </SubmitButton>
            <SubmitButton data-testid="sign-in-button" variant="transparent" className="w-full mt-6 border-[1px] border-black rounded-md ">
            Continue with the facebook
            </SubmitButton>
          </form>
          <span className="text-center text-ui-fg-base text-small-regular mt-6">
            Not a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
              className="underline pt-3 font-medium"
              data-testid="register-button"
            >
              Register 
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
