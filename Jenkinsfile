pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/astheticx/secure-ci-cd-project.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t todo-app-image .'
            }
        }

        stage('Trivy Scan') {
            steps {
                bat 'wsl trivy image todo-app-image || true'
            }
        }

        stage('Deploy Container') {
            steps {
                bat '''
                    docker stop todo-container || true
                    docker rm todo-container || true
                    docker run -d -p 3000:3000 --name todo-container todo-app-image
                '''
            }
        }
    }

    post {
        success {
            echo 'Build successful. Application is deployed and running on http://localhost:3000'
        }
        failure {
            echo 'Build failed. Please check pipeline logs.'
        }
    }
}
