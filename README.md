# next-episode  

## Purpose  
The purpose of this project is to serve as an exercise in developing a React Web Application from scratch
and then subsequently migrating the application over to the NextJs framework. During the migration
process the intent is to document all findings and provide examples for issues that are encountered
as well as provide examples on how to navigate these issues.

## Documentation & Examples  

Once the React Application becomes large enough for a non-trivial migration to the NextJs framework
documentation on findings, thoughts, examples, change logs, and links to other resources will
be provided to aid developers in understanding what goes into a migration to a framework such as NextJs,
as well as assist in potential migrations.

## Contributing  

If you feel you can provide insight into this project or wish to engage in building an application
for the sake of exercise, please feel free to reach out and contribute. Whether you are an advanced 
developer that can provide insight into best practices or you simply wish to hone your skills while
providing to the community, all are welcome.

## Development and Running Locally

_Requirements_  

* NVM  
* Yarn version 1  
* Docker
* Docker Compose  
* _(For Windows) some way to execute shell scripts that contain docker-compose commands_  

_Run locally_  

1. Run `nvm use`/`nvm install` if this is your first time running the project
1. Run `Yarn` to install the node module
1. execute [run_docker_local.sh](./local/run_docker_local.sh) to build and run the docker container for the application
1. To view the application, navigate to `localhost:8888` in your browser
1. Once finished, execute [stop_and_cleanup.sh](./local/stop_and_cleanup.sh) _(This will stop the container and remove
the docker image from your machine)_  
