import { Module, DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({})
export class CustomGraphQLModule {
  static forRoot(): DynamicModule {
    return {
      module: CustomGraphQLModule,
      imports: [
        GraphQLModule.forRoot({
          driver: ApolloDriver,
          typePaths: ['./**/*.graphql'],
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
        }),
      ],
    };
  }
}
