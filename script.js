'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('Hello, je suis Harry ! Est ce que tu as un peu de temps de disponible ? =)').then(() => 'askForTime');
        }
    },

    askForTime: {
        receive: (bot, message) => {
            bot.say('Super, ça tombe bien, moi aussi ! (Ginny est en déplacement)')
                .then(() => bot.say('Est ce qu\'on peut parler de ta présentation \'Evil Plan to Conquer the World\' que tu as mis en ligne hier soir ?))
                    .then(() => 'askForErrors');
        }
    },

    askForErrors: {
        receive: (bot) => {
            return bot.say('Alors, déjà, je n'ai trouvé que 8% de fautes, ce qui est vraiment pas mal !')
                .then(() => bot.say('Mais, slide 5, qu\'est ce que tu entends par \'\'));
        }
    }

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say(`Sorry ${name}, my creator didn't ` +
                        'teach me how to do anything else!'))
                .then(() => 'finish');
        }
    }
});
