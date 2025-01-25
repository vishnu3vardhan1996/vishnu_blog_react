pipeline {

    agent {
        label "vishnu_blog"
    }

    environment {
        REGISTRY = "vishnu3vardhan1996/frontend"
        TAG = "1.0.2"
        DOCKER_USERNAME = credentials('docker-login-username')
        DOCKER_PASSWORD = credentials('docker-login-password')
        CHECK_DOCKER_IMAGE = "docker images -a ${REGISTRY}:${TAG}"
    }

    stages {
        stage('Docker Build') {
            steps {
                sh '''
                    docker build -t ${REGISTRY}:${TAG} .
                    docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
                    docker push ${REGISTRY}:${TAG}
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                    docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
                    if docker manifest inspect ${REGISTRY}:${TAG}; then
                        docker pull ${REGISTRY}:${TAG};
                    else
                        echo "Already exists";
                    fi
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    set -o pipefail
                    
                    if helm list | grep -w vishnu-blog-fe; then
                        helm upgrade vishnu-blog-fe ./helm_charts/react;
                    else
                        helm install vishnu-blog-fe ./helm_charts/react;
                    fi
                    
                '''
            }
        }
    }

}