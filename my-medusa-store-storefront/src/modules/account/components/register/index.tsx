"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div className="w-full justify-items-center">
      <h1 className="text-6xl font-semibold">Sign Up</h1>
      <div
        className="w-full grid grid-cols-3 px-[10rem] pt-[5rem] py-16"
        data-testid="register-page"
      >
        <div className="w-full col-span-2">
          image
        </div>
        <div>
          <form className="w-full flex flex-col" action={formAction}>
            <div className="flex flex-col w-full gap-y-2">
              <div className="">
              <h3 className="text-sm p-1">First name</h3>
              <Input
                label="First name"
                name="first_name"
                required
                autoComplete="given-name"
                data-testid="first-name-input"
              />
              </div>
              <div>
              <h3 className="text-sm p-1">last name</h3>
              <Input
                label="Last name"
                name="last_name"
                required
                autoComplete="family-name"
                data-testid="last-name-input"
              />
              </div>
              <div>
              <h3 className="text-sm p-1">Email</h3>
              <Input
                label="Email"
                name="email"
                required
                type="email"
                autoComplete="email"
                data-testid="email-input"
              />
              </div>
              <div>
              <h3 className="text-sm p-1">Phone number</h3>
              <Input
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                data-testid="phone-input"
              />
              </div>
              <div>
              <h3 className="text-sm p-1">Password</h3>
              <Input
                label="Password"
                name="password"
                required
                type="password"
                autoComplete="new-password"
                data-testid="password-input"
              />
              </div>
            </div>
            <ErrorMessage error={message} data-testid="register-error" />
            <span className="text-center text-ui-fg-base text-small-regular mt-6">
              By creating an account, you agree to NEOM&apos;s{" "}
              <LocalizedClientLink
                href="/content/privacy-policy"
                className="underline"
              >
                Privacy Policy
              </LocalizedClientLink>{" "}
              and{" "}
              <LocalizedClientLink
                href="/content/terms-of-use"
                className="underline"
              >
                Terms of Use
              </LocalizedClientLink>
              .
            </span>
            <SubmitButton  data-testid="register-button" variant="transparent" className="w-full mt-6 bg-yellow-300">
              Join
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
            Already a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
              className="underline"
            >
              Sign in
            </button>
            .
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
