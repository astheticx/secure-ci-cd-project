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
                bat '''
                    docker build -t todo-app-image .
                '''
            }
        }

        stage('Trivy Scan') {
            steps {
                bat '''
                    echo Running Trivy Scan...
                    wsl trivy image --format table todo-app-image > trivy-report.txt
                    type trivy-report.txt
                '''
            }
        }

        stage('Deploy Container') {
            steps {
                bat '''
                    echo Stopping old container if exists...
                    docker stop todo-container || true
                    docker rm todo-container || true

                    echo Running new container...
                    docker run -d -p 3000:3000 --name todo-container todo-app-image
                '''
            }
        }
    }

    post {
        success {
            echo "Build Successful!"
            echo "Application running at: http://localhost:3000"
            archiveArtifacts artifacts: 'trivy-report.txt', onlyIfSuccessful: true
        }
        failure {
            echo "Build Failed! Check logs
