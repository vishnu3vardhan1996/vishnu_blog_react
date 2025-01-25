pipeline {

    agent {
        label "vishnu_blog"
    }

    environment {
        REGISTRY = "vishnu3vardhan1996/frontend"
        TAG = "1.0.1"
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
                    docker manifest inspect ${REGISTRY}:${TAG}
                    if [ $? -ne 0 ]; then
                        docker pull ${REGISTRY}:${TAG};
                    fi
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    helm list | grep vishnu-blog-fe;
                    if [ $? -ne 0 ]; then
                        helm install vishnu-blog-fe ./helm/react;
                    else
                        helm upgrade vishnu-blog-fe-new ./helm/react;
                    fi
                '''
            }
        }
    }

}