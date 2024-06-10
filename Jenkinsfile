pipeline {
    agent any

    environment {
       
        REPO_URL = 'https://gitlab.com/new1190414/automated-docker-cicd-pipeline.git'
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
        
        stage('Build Docker Images') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE_FRONTEND}", './frontend')
                    docker.build("${DOCKER_IMAGE_BACKEND}", './backend')
                }
            }
        }

        stage('Run MongoDB Container') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE_MONGO}").withRun("-p ${MONGO_PORT}:${MONGO_PORT} --name mongodb") { c ->
                    }
                }
            }
        }

        stage('Run Application Containers') {
            steps {
                script {
                    docker.image("${DOCKER_IMAGE_BACKEND}").withRun("-p ${BACKEND_PORT}:${BACKEND_PORT} --name backend --link mongodb") { c ->
                    }
                    docker.image("${DOCKER_IMAGE_FRONTEND}").withRun("-p ${FRONTEND_PORT}:${FRONTEND_PORT} --name frontend --link backend") { c ->
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker system prune -f'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
