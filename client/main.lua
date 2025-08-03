gIsNuiReady = false

RegisterCommand("openui", function()
    openUi()
end)

function openUi()
    if not gIsNuiReady then
        return
    end

    SetNuiFocus(true, true)

    sendReactMessage("hud:show", true)
    sendReactMessage("hud:setTextOnScreen", "Texto do centro da tela")
end

function UIRoutes.IsReady( data )
    gIsNuiReady = true
end

function UIRoutes.Esc( data )
    sendReactMessage("hud:show", false)
    SetNuiFocus(false, false)
end