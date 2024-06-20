pipeline {
    agent any

    environment {
        REPO_URL = 'https://gitlab.com/new1190414/Online-Voting-System-Web-App.git'
        DOCKER_IMAGE_FRONTEND = 'githmioshani/frontend'
        DOCKER_IMAGE_BACKEND = 'githmioshani/backend'
        DOCKER_IMAGE_MONGO = 'mongo:4.4'
        BACKEND_PORT = '3500'
        FRONTEND_PORT = '5173'
        MONGO_PORT = '27017'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'token1', url: "${REPO_URL}", branch: 'main'
            }
        }
        
        stage('Build and Run Docker Containers') {
            steps {
                script {
                    bat 'docker-compose down' // Ensure no existing containers are running
                    bat 'docker-compose up --build' // Build and run containers in detached mode
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            bat 'docker-compose down'
            // bat 'docker system prune'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
