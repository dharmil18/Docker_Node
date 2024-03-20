pipeline {
  environment {
    imagename = "dharmil18/c0884179-assignment-4"
    registryCredential = 'dockerhub'
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/dharmil18/Docker_Node.git', branch: 'main'])
      }
    }
    stage('Building image') {
      steps {
        script {
          dockerImage = docker.build imagename
        }
      }
    }
    stage('Deploy Image') {
      steps {
        script {
          try {
            docker.withRegistry('https://registry-1.docker.io/v2/', registryCredential) {
              dockerImage.push("$BUILD_NUMBER")
              dockerImage.push('latest')
            }
          } catch (Exception e) {
            echo "Failed to push Docker image: ${e.message}"
            currentBuild.result = 'FAILURE'
            error('Failed to push Docker image')
          }
        }
      }
    }
    stage('Remove Unused Docker image') {
      steps {
        sh "docker rmi $imagename:$BUILD_NUMBER"
        sh "docker rmi $imagename:latest"
      }
    }
  }
}
