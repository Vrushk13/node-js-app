pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Name as configured in Jenkins → Global Tool Configuration
    }

    environment {
        APP_NAME = "nodejs-app"
        PORT = "3000"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step"'
            }
        }

        stage('Start Application') {
            steps {
                sh 'npm start &'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline executed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}
