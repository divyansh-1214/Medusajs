import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-xl">Select {title}</span>
      <div
        className="flex flex-wrap justify-items-center gap-3"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          return (
            <>
              {/* <button
                onClick={() => updateOption(option.id, v)}
                key={option.id}
                className={clx(
                  "border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1 ",
                  {
                    "border-ui-border-interactive": v === current,
                    "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                      v !== current,
                  }
                )}
                
                disabled={disabled}
                data-testid="option-button"
              >
                {v}
              </button> */}
              {/* curent vale size par hover kar ne kuch dimag lagana */}
              <input
                type="radio"
                name="choice"
                value={v}
                onChange={() => updateOption(option.id, v)}
                className={clx(
                  "",
                  {
                    "border-ui-border-interactive": v === current,
                    "hover:shadow-elevation-card-rest transition-shadow ease-in-out duration-150":
                      v !== current,
                  }
                )}
                key={v}
              />{v}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
