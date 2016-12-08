'use strict'
const util   = require('util')
const path   = require('path')
const yeoman = require('yeoman-generator')
const yosay  = require('yosay')
const chalk  = require('chalk')
const mkdirp = require('mkdirp')
const commandExists = require('command-exists')
const clear = require('clear-terminal')

const dhBoilerplateBootstrapGenerator = yeoman.generators.Base.extend({

    init() {
        this.pkg = require('../package.json')
    },

    askFor() {
        const done = this.async()

        // Have Yeoman greet the user.
        this.log(yosay(
            `Welcome to the impressive ${chalk.magenta('dhBoilerplate')} generator!`
        ))

        const welcome =
                '\n        dhBoilerplate (with Bootstrap) made with love & help.                          ' +
                '\n        -------------------------------------------------------------------------------' +
                '\n        Author            :   David Hellmann, modified by Melanie Gravel               ' +
                '\n        Website           :   https://davidhellmann.com                                ' +
                '\n        Original Github   :   https://github.com/davidhellmann/generator-dhBoilerplate '            

        clear();
        console.log(welcome);

        return this.prompt([
            {
                type:    'input',
                name:    'projectName',
                message: 'Please give your project a name (without Spaces)',
                default: 'dhBoilerplateBootstrap'
            }, {
                type:    'input',
                name:    'projectDescription',
                message: 'Short description of the Project',
                default: 'undefined'
            }, {
                type:    'input',
                name:    'proxyUrl',
                message: 'Proxy URL',
                default: false
            }, {
                type: 'confirm',
                name: 'projectIECompatible',
                message: 'IE8 compatibility needed?',
                default: false
            }, {
                type:    'input',
                name:    'projectVersion',
                message: 'Project Version Number',
                default: '0.0.1'
            }, {
                type:    'input',
                name:    'projectAuthor',
                message: 'Project Author or company',
                default: 'undefined'
            }, {
                type:    'input',
                name:    'projectMail',
                message: 'Mailadress of the author',
                default: 'undefined'
            }, {
                type:    'input',
                name:    'projectUrl',
                message: 'Author URL',
                default: 'http://...'
            }, {
                type:    'input',
                name:    'projectRepo',
                message: 'Git Repo URL',
                default: 'http://...'
            }
        ]).then(function(answers) {
            const checkAnswer = (answer) => {
                if (answer) {
                    return answer
                }
                return false
            }
            this.projectName          = answers.projectName
            this.projectDescription   = answers.projectDescription
            this.proxyUrl             = answers.proxyUrl
            this.projectIECompatible  = answers.projectIECompatible
            this.projectVersion       = answers.projectVersion
            this.projectAuthor        = answers.projectAuthor
            this.projectMail          = answers.projectMail
            this.projectUrl           = answers.projectUrl
            this.projectRepo          = answers.projectRepo
            this.projectYarn          = answers.projectYarn
            done()
        }.bind(this))
    },

    app() {
        // move src folder
        this.directory('___src/_system/',   '___src/_system/')
        this.directory('___src/_data/',   '___src/_data/')
        this.directory('___src/assets/',    '___src/assets/')
        this.directory('___src/gulp/',      './gulp/')
        this.directory('___src/templates/prototyping/', '___src/templates/')
    },

    projectfiles() {
        const params = {
            projectName:          this.projectName,
            projectDescription:   this.projectDescription,
            proxyUrl:             this.proxyUrl,
            projectIECompatible:  this.projectIECompatible,
            projectVersion:       this.projectVersion,
            projectAuthor:        this.projectAuthor,
            projectMail:          this.projectMail,
            projectUrl:           this.projectUrl,
            projectRepo:          this.projectRepo,
            projectYarn:          this.projectYarn
        }


        this.fs.copyTpl(
            this.templatePath('_package.json'),
            this.destinationPath('package.json'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('_config.json'),
            this.destinationPath('config.json'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('_gulpfile.babel.js'),
            this.destinationPath('gulpfile.babel.js'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('_readme.md'),
            this.destinationPath('readme.md'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('_gitignore'),
            this.destinationPath('.gitignore'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('editorconfig'),
            this.destinationPath('.editorconfig'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('jshintrc'),
            this.destinationPath('.jshintrc'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('eslintrc'),
            this.destinationPath('.eslintrc'),
            params
        )

        this.fs.copyTpl(
            this.templatePath('babelrc'),
            this.destinationPath('.babelrc'),
            params
        )
    },



    //  --------------------------------------------------------
    //  Install Packages
    //  --------------------------------------------------------

    install() {
        const _self = this;

        // check if yarn is available and use it instead of npm
        commandExists('yarn', function(err, commandExists) {
          if(commandExists) {
            var done = _self.async()
            _self.spawnCommand('yarn').on('close', done)
          } else {
            _self.installDependencies({
              bower: false,
              npm: true
            })
          }
        })

        this.log('Install NPM Modules.')
        this.log('Give me a moment to do that…')
    }

})

module.exports = dhBoilerplateBootstrapGenerator
