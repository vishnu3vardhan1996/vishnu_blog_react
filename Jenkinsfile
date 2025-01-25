pipeline {

    agent {
        label "vishnu_blog"
    }

    environment {
        REGISTRY = "vishnu3vardhan1996/frontend"
        TAG = "latest"
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
                        echo "Image exists in the registry";
                    else
                        echo "Image does not exist in the registry";
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