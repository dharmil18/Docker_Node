pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'dharmil18/c0884179-node-express-app' // Docker Hub image name
        DOCKER_IMAGE_TAG = 'latest' // Image tag
        GITHUB_REPO_URL = 'https://github.com/dharmil18/Docker_Node.git' // GitHub repository URL
        DOCKERHUB_CREDENTIALS = 'dockerhub' // Jenkins credentials ID for Docker Hub
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${GITHUB_REPO_URL}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}", "./")
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        docker.withRegistry('https://index.docker.io/v1/', 'dockerhub_credentials') {
                            docker.image("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}").push()
                        }
                    }
                }
            }
        }
    }
}
