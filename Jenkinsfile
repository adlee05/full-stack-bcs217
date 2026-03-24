pipeline {
  agent any

  stages {
    stage('build image') {
      steps {
        sh 'docker build -t 2023bcs0217/2023bcs0217_client:latest ./client'
        sh 'docker build -t 2023bcs0217/2023bcs0217_server:latest ./server'
      }
    }

    stage('login to docker hub') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerCred-mar',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
        }
      }
    }

    stage('push image to docker hub') {
      steps {
        sh 'docker push 2023bcs0217/2023bcs0217_client:latest'
        sh 'docker push 2023bcs0217/2023bcs0217_server:latest'
      }
    }
  }
}
