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

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name todo-container todo-app-image'
            }
        }
    }

    post {
        always {
            bat 'docker stop todo-container || true'
            bat 'docker rm todo-container || true'
        }
    }
}
