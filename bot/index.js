const { Telegraf, Markup } = require('telegraf')

const token = "<token>";
if (token === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token)

// bot.use(Telegraf.log())

bot.command('start', (ctx) => //возвращает кнопку с приложенем
    ctx.reply('Добро пожаловать в приложение заметки!',{
        reply_markup: {
            inline_keyboard: [
                [ { text: "Открыть приложение", url: "https://t.me/roverGramBot/RoverGram", callback_data: 'testButton' + 123} ]
            ]
        }
    })
)

bot.command('button', (ctx) => //возвращает кнопку с приложенем
        ctx.reply('Кнопка',{
            reply_markup: {
                inline_keyboard: [
                    [ { text: "Открыть приложение", url: "https://t.me/roverGramBot/RoverGram", callback_data: 'testButton' + 123} ]
                ]
            }
        })
)


bot.command('launch', (ctx) => {
    let result = ctx.reply(
        "Ошибка - нельзя воспользоваться этой командой!",
    );
    try {
        result = ctx.reply(
            "Открыть заметки",
            Markup.inlineKeyboard([
                Markup.button.webApp(
                    "Открыть",
                    "https://dev.rovertask.com/"
                ),
            ])
        );

    } catch (err) {
        return result
    }

    return result
})
