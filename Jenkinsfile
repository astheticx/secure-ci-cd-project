pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOURNAME/YOURREPO.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "No tests added"'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t todoapp:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 todoapp:latest'
            }
        }
    }
}
