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
                sh 'docker build -t todo-app-image .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'trivy image todo-app-image || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name todo-container todo-app-image'
            }
        }
    }

    post {
        always {
            sh 'docker stop todo-container || true'
            sh 'docker rm todo-container || true'
        }
    }
}
