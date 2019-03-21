'use strict';
process.env.NODE_ENV = 'test';
/**
 * @author Srinivas Kanuparthi
 * Module dependencies.
 */


var chai = require('chai'),
    chaiHttp = require('chai-http'),
    mocha = require('mocha'),
    before = mocha.before,
    expect = chai.expect,
    dataStoreLib = require('./utils/dataStore'),
    config = require('./utils/config'),
    authToken = undefined,
    dataStore = new dataStoreLib('./test/data/stacksTest.json'),
    date = new Date();



chai.use(chaiHttp);


describe('============================> Stacks Mocha Tests <=============================', () => {

    before((done) => {
        chai.request(config.server)
            .post('/api/auth/sign-in')
            .send(config.srinu)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object')
                expect(res.body).to.have.property('token');
                authToken = res.body.token;
                done();
            });
    });//login before starting test cases

    describe('Saving Stacks From Wizard View......................', () => {

        describe('it will create stack of type instance and it will update it', () => {
            var updateData, stackId;
            it('1.it will create a stack of type instance.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').Instance;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('2.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        })

        describe('it will create stack of type container and it will update it', () => {
            var updateData, stackId;
            it('3.it will create a stack of type container.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').Container;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('4.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        })

        describe('it will create stack of type service and it will update it', () => {
            var updateData, stackId;
            it('5.it will create a stack of type service.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').Service;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('6.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create stack of type custom with json and it will update it', () => {
            var updateData, stackId;
            it('7.it will create a stack of type custom with json type.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').CustomCodeJson;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('8.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create stack of type custom with hcl and it will update it', () => {
            var updateData, stackId;
            it('9.it will create a stack of type custom with hcl type.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').CustomCodeHcl;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('10.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        })

        describe('it will create stack of type custom with yaml and it will update it', () => {
            var updateData, stackId;
            it('11.it will create a stack of type custom with yaml type.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').CustomCodeYaml;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('12.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        })

        describe('it will create stack of type custom with source of Template and it will update it', () => {
            var updateData, stackId;
            it('13.it will create a stack of type custom with source of Template.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').CustomExternalRepoTemplate;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('14.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        })

        describe('it will create stack of type custom with external-repo from source of Workspace and it will update it', () => {
            var updateData, stackId;
            it('15.it will create a stack of type custom with external-repo from source of Workspace.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').CustomExternalRepoWorkSpace;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('16.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        })

        describe('it will create stack of type custom with external-repo from source of SCM and it will update it', () => {
            var updateData, stackId;
            it('17.it will create a stack of type custom with external-repo from source of SCM.', (done) => {
                var stackData = dataStore.getEntity('wizard-stack-saves').CustomExternalRepoApplicationTool;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('18.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

    });//save and update test-cases that will save stack from all wizard views

    describe('Saving Stacks From Quick View.......................', () => {

        describe('it will create quick stack of type instance and it will update it', () => {
            var updateData, stackId;
            it('19.it will create a quick stack with instance.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').instance;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('20.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type container and it will update it', () => {
            var updateData, stackId;
            it('21.it will create a quick stack with container.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').container;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('22.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type service and it will update it', () => {
            var updateData, stackId;
            it('23.it will create a quick stack with service.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').service;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('24.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type package and it will update it', () => {
            var updateData, stackId;
            it('25.it will create a quick stack with package.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').package;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('26.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type container with JSON and it will update it', () => {
            var updateData, stackId;
            it('27.it will create a quick stack of type container with JSON.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').json;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('28.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type container with YAML and it will update it', () => {
            var updateData, stackId;
            it('29.it will create a quick stack of type container with YAML.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').yaml;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('30.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type container with Template and it will update it', () => {
            var updateData, stackId;
            it('31.it will create a quick stack of type container with Template.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').template;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('32.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type container with Workspace and it will update it', () => {
            var updateData, stackId;
            it('33.it will create a quick stack of type container with Workspace.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').workspace;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('34.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create quick stack of type container with SCM and it will update it', () => {
            var updateData, stackId;
            it('35.it will create a quick stack of type container with SCM.', (done) => {
                var stackData = dataStore.getEntity('quick-stack-saves').scm;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('36.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

    });//save and update test-cases that will save quick stack from all quick launch views

    describe('Saving Stacks From Code Mirror View.................', () => {

        describe('it will create a stack with code of JSON and it will update it', () => {
            var updateData, stackId;
            it('37.it will create a stack with code of JSON.', (done) => {
                var stackData = dataStore.getEntity('code-stack-saves').json;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('38.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create a stack with code of YAML and it will update it', () => {
            var updateData, stackId;
            it('39.it will create a stack with code of YAML.', (done) => {
                var stackData = dataStore.getEntity('code-stack-saves').yaml;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('40.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create a stack with Workspace File Path and Id and it will update it', () => {
            var updateData, stackId;
            it('41.it will create a stack with Workspace File Path and Id.', (done) => {
                var stackData = dataStore.getEntity('code-stack-saves').workspace;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/application-tools/save/code/entity')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('42.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

        describe('it will create a stack with with SCM File Path and Id and it will update it', () => {
            var updateData, stackId;
            it('43.it will create a stack with SCM File Path and Id.', (done) => {
                var stackData = dataStore.getEntity('code-stack-saves').applicationTool;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                chai.request(config.server)
                    .post('/api/application-tools/save/code/entity')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('44.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

    });//save and update test-cases that will save

    describe('Saving Stacks From Populated Entities...............', () => {

        describe('it will create a stack with populated entities and it will update it', () => {
            var updateData, stackId;
            it('45.it will create a stack with of type instance with populated json object.', (done) => {
                var stackData = dataStore.getEntity('populate-stack-saves').Instance;
                stackData.name = stackData.name + date.getMinutes() + date.getSeconds() + date.getHours()
                stackData.instances[0].instance.name = stackData.name
                stackData.instances[0].packages[0].package.name = stackData.name
                chai.request(config.server)
                    .post('/api/catalog-stacks')
                    .set('Authorization', authToken)
                    .send(stackData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        updateData = res.body
                        stackId = res.body._id
                        done();
                    });
            });

            it('46.it will update the previous created stack with stackId.', (done) => {
                updateData.name = updateData.name + 'updated' + date.getSeconds()
                chai.request(config.server)
                    .patch('/api/catalog-stacks/' + stackId)
                    .set('Authorization', authToken)
                    .send(updateData)
                    .end((err, res) => {
                        expect(err).to.be.null;
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.an('object')
                        expect(res.body).to.have.property('stackId');
                        done();
                    });
            });
        });

    })
});