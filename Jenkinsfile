pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'npm start'
            }
        }
    }

    post {
        success {
            echo '✅ Node.js application started successfully'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
