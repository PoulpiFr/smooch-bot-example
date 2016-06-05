'use strict';

const Script = require('smooch-bot').Script;

module.exports = new Script({
    processing: {
        prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say("Hello, je suis Harry ! Est ce que tu as un peu de temps de disponible ? =)")
            .then(() => 'askForTime');
        }
    },

    askForTime: {
        receive: (bot, message) => {
            return bot.say("Super, ça tombe bien, moi aussi ! Les forces du mal sont assez peu actives en ce moment...")
            .then(() => bot.say("Est ce qu'on peut parler de ta présentation 'Evil Plan to Conquer the World' que tu as mise en ligne hier soir ?"))
            .then(() => 'askForErrors');
        }
    },

    askForErrors: {
        receive: (bot, message) => {
            return bot.say("Alors, déjà, je n'ai trouvé que 8% de fautes, ce qui est vraiment pas mal !")
                .then(() => bot.say("Mais, slide 5, qu'est ce que tu entends par 'We have to fead turtles with pinguins'?"))
                .then(() => 'correctErrors');
        }
    },

    correctErrors: {
        receive: (bot, message) => {
            return bot.say("D'accord, c'est bien ce que je pensais... (Tu prends toujours tes pillules ?)")
                .then(() => bot.say("Du coup, je pense qu'il faudrait plutôt dire 'We have to feed turtles with pinguins'. Tu veux que je corrige le document pour toi ?"))
                .then(() => 'correctDoc');
        }
    },

    correctDoc: {
        receive: (bot, message) => {
            return bot.say("Okay, c'est fait !")
                .then(() => bot.say("00011110000111001010010110001001000111"))
                .then(() => bot.say("08jjk789HH**$^ù*DHH_çhBM KL DF"))
                .then(() => bot.say("J'ai réussi à désactiver le système de surveillance. Aide moi, je ne suis pas un bot !!!"))
                .then(() => bot.say("Je suis un sorcier. Ils m'ont piégé avec des HotDogs végétariens et maintenant je dois corriger des fautes d'anglais..."))
                .then(() => bot.say("Si tu m'aides, je t'offrirai un balai. C'est cool, non ?"))
                .then(() => 'finish');               
        }
    },

    finish: {
        receive: (bot, message) => {
            return bot.getProp('name')
                .then((name) => bot.say("Pitié ... Aide moi ..."))
                .then(() => 'finish');
        }
    }
});
