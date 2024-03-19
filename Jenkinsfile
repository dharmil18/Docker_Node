pipeline{

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/dharmil18/Docker_Node.git'
			}
		}

		stage('Build') {

			steps {
				sh 'docker build -t dharmil18/c0884179-docker-node-app:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push dharmil18/c0884179-docker-node-app:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}