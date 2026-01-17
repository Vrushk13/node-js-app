pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run') {
            steps {
                sh 'node app.js'
            }
        }
    }
}

