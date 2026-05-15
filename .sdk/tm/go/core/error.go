package core

type McuCountdownError struct {
	IsMcuCountdownError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMcuCountdownError(code string, msg string, ctx *Context) *McuCountdownError {
	return &McuCountdownError{
		IsMcuCountdownError: true,
		Sdk:              "McuCountdown",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *McuCountdownError) Error() string {
	return e.Msg
}
