pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/astheticx/secure-ci-cd-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat """
                docker build -t todo-app-image .
                """
            }
        }

stage('Trivy Scan') {
    steps {
        bat """
        echo Running Trivy Scan...
        wsl trivy image --format json todo-app-image > trivy-report.json
        """
    }
}



        stage('Deploy Container') {
            steps {
                bat """
                echo Stopping old container if exists...
                docker stop todo-container || echo No old container
                docker rm todo-container || echo Already removed

                echo Starting new container...
                docker run -d -p 3000:3000 --name todo-container todo-app-image
                """
            }
        }
    }

    post {
        success {
            echo "Build Successful!"
            echo "Application deployed at: http://localhost:3000"
            archiveArtifacts artifacts: 'trivy-report.txt', onlyIfSuccessful: true
        }
        failure {
            echo "Build Failed — Check Console Output."
        }
    }
}
