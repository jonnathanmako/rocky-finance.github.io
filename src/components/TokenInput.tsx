import "./TokenInput.scss"

import React, { ReactElement } from "react"

import { useTranslation } from "react-i18next"

interface Props {
  symbol: string
  icon: string
  max?: number
  inputValue: string
  onChange: (value: string) => void
}

function TokenInput({
  symbol,
  icon,
  max,
  inputValue,
  onChange,
}: Props): ReactElement {
  const { t } = useTranslation()
  function onClickMax(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault()
    onChange(String(max))
  }
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    onChange(e.target.value)
  }

  return (
    <div className="tokenInput">
      <img alt="icon" src={icon} />
      <span>{symbol}</span>
      {max != null && (
        <button className="max" onClick={onClickMax}>
          {`${t("max")}:${Math.floor(max * 100) / 100}`}
        </button>
      )}
      <input
        value={inputValue}
        onChange={onChangeInput}
        placeholder={max ? String(max) : "0"}
        onFocus={(e: React.ChangeEvent<HTMLInputElement>): void =>
          e.target.select()
        }
      />
    </div>
  )
}

export default TokenInput
